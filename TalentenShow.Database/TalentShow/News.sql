CREATE TABLE [dbo].[News]
(
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [Title] VARCHAR(255) NOT NULL,
    [Content] VARCHAR(1000) NOT NULL,
    [IsHidden] BIT NOT NULL DEFAULT 0,
    [DatePublished] Date NULL
)
