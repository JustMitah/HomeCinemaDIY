### Progress
We finished all the objectives of this project!

### Setup
<ul>
<li>pull the project</li>
<li>execute "node index.js" on the raspberry pi</li>
<li>make sure you have apache2 with php-mysqli and other php basic extensions</li>
<li>execute "cd /var/www/html && ln -s path/to/projectfolder"</li>
<li>setup over, go to http://localhost/projectfolder</li>
</ul>

### Some helpful commands

###### convert scss to css
`sass format.scss format.css`

###### create table
`CREATE TABLE netflix ( id INT NOT NULL, title VARCHAR(255) NOT NULL, categories VARCHAR(255) NOT NULL, type VARCHAR(10) NOT NULL, PRIMARY KEY (id));`
 
###### load csv into table
`LOAD DATA INFILE '/var/lib/mysql-files/netflix_titles_nov_2019.csv'  INTO TABLE netflix FIELDS TERMINATED BY ','  ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;`

New Table with extracted categories(42 distinct ones)

`CREATE TABLE categories SELECT DISTINCT trim(listed_in) as category from
(
select
  SUBSTRING_INDEX(SUBSTRING_INDEX(film.listed_in, ',', numbers.n), ',', -1) listed_in
from
  numbers inner join film
  on CHAR_LENGTH(film.listed_in)
     -CHAR_LENGTH(REPLACE(film.listed_in, ',', ''))>=numbers.n-1
order by n) sub;
ALTER TABLE categories ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT, ADD PRIMARY KEY (id);
ALTER TABLE categories MODIFY COLUMN id BIGINT FIRST;` 

Create our final table :

`
CREATE TABLE netflix
SELECT f.*, Palette1,Palette2,Palette3
FROM film f
INNER JOIN categories_colors cc
ON f.listed_in = cc.listed_in;
`

Delete duplicates from categories_colors :

`
DELETE cc1
FROM categories_colors cc1, categories_colors cc2
WHERE cc1.id_categorie = cc2.id_categorie
AND cc1.listed_in = cc2.listed_in
AND cc1.id > cc2.id
`
### Database tables

##### Table 'Film'

Film is a table from our database that contains all the movies, series and TV shows from Netflix.
The table film was created as follow:<br/>
`create table Film (
	  show_id int(11) NOT NULL,
   title varchar(255) NOT NULL,
   duration varchar(255) NOT NULL,
   listed_in  varchar(255) NOT NULL,
  PRIMARY KEY (show_id)
);`
<br/>

Where show_id, title, duration and listed_in are the table attributes. Then to fill the table with information, data was imported to the table using the functionality 'Table data import wizard' in MySQLWorkbench and imported the csv file 'netflix_titles_nov_2019_'.

##### Table 'categories'

Categories is a table that has only different types and genres of shows that exists in Film table.
The table Categories was created by selecting only the column 'listed_in' of the Film table, so it is only an exctraction of a column.<br/>

`CREATE TABLE Categories (id_categorie int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY) SELECT DISTINCT listed_in FROM Film;`

##### Table 'colorpalette'

colorpalette is a table that contains different Neflix genres and types of movies, shows and series assosiated each with 5 
hexdecimal code of the color meeting this genre.

This table is created as follow:<br/>
`CREATE TABLE ColorPalette(
	  Palette_id int(11) NOT NULL AUTO_INCREMENT,
    Palette_name varchar(255) NOT NULL,
    Palette_RGB1 Binary(3) NOT NULL,
    Palette_RGB2 Binary(3)  NOT NULL,
    Palette_RGB3 Binary(3)  NOT NULL,
    Palette_RGB4 Binary(3)  NOT NULL,
    Palette_RGB5 Binary(3)  NOT NULL,
    PRIMARY KEY (Palette_id)
);`
Where :
  + Palette_id is the primary key of the table 
  + Palette_name is the name in that case of the type associated to the 5 colors
  + Palette_RGB1, Palette_RGB2, Palette_RGB3, Palette_RGB4, Palette_RGB5 is the 5 columns of hexadecimal code of the color associated to the type in Palette_name.

  Data was inserted manually to the table associating each type with the suitable color palette.<br/>
  Example of the data inserted:<br/>
  `INSERT INTO colorpalette VALUES (1,'Horror',unhex('C74343'),unhex('92323C'),unhex('515076'), unhex('39354F'),unhex('AEA9CC'));`
  Here for the type 'horror' for example the color palette associated is reds and dark blueish tints. Thus, for every color in this combinaison of reds and dark blueish tints, hexadecimal code was filled in the correspondant column using 'unhex' fonction that allows to convert a hexadecimal value to a human-readable string.
   
##### Table 'categories_colors'

categories_colors table is the join of categories table and colorpalette table where each type or genre of movies, TV shows and series on Netflix has a suitable color palette.<br/>
This join was made as follow:<br/>

`CREATE TABLE if not exists Categories_Colors  SELECT DISTINCT id_categorie,listed_in,Palette_RGB1,Palette_RGB2,Palette_RGB3,Palette_RGB4,Palette_RGB5 FROM categories,colorpalette where categories.listed_in LIKE concat('%' ,colorpalette.Palette_name ,'%');`<br/>
 The clause where is the key of this join as it takes the column listed_in of the table categories and wherever there is a type in the column palette_name of the colorpalette table that is a substring of the column listed_in it create a row with the type and the color palette associated.<br/>

NB: by doing so multiple rows with different colorpalettes will be created for each type/genre because in our dataset of Netflix movies, shows and movies or series belong to multiple types.<br/>
