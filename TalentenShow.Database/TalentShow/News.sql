CREATE TABLE [TalentShow].[News]
(
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [Title] VARCHAR(255) NOT NULL,
    [Content] TEXT NOT NULL,
    [IsHidden] BIT NOT NULL DEFAULT 0,
    [DatePublished] Date NULL
)
