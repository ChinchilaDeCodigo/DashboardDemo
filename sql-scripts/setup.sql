USE DevTeste;
GO


DROP TABLE IF EXISTS Hero;
DROP PROCEDURE IF EXISTS InsertHero;
GO

CREATE TABLE Hero(ID INT PRIMARY KEY IDENTITY, NAME NVARCHAR(40));
GO

DECLARE @heroes NVARCHAR(4000) =
N'[
	{ "name": "Mr. Nice" },
    { "name": "Narco" },
    { "name": "Bombasto" },
    { "name": "Celeritas" },
    { "name": "Magneta" },
    { "name": "RubberMan" },
    { "name": "Dynama" },
    { "name": "Dr IQ" },
    { "name": "Magma" },
    { "name": "Tornado" }
]';

INSERT INTO Hero(NAME)
SELECT name FROM OPENJSON(@heroes) WITH (name NVARCHAR(40));
GO

CREATE PROCEDURE dbo.InsertHero(@hero NVARCHAR(4000))
AS BEGIN

	INSERT INTO Hero(NAME)
	SELECT name
	FROM OPENJSON(@hero) WITH (NAME NVARCHAR(40));

	SELECT JSON_MODIFY(@hero, '$.id', @@IDENTITY)

END