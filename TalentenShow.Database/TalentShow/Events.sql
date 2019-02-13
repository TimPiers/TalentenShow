CREATE TABLE [TalentShow].[Events]
(
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [Name] VARCHAR(255) NOT NULL,
    [Description] VARCHAR(1000) NOT NULL,
    [EventCode] VARCHAR(10) NOT NULL,
    [MaxNumberOfParticipants] INT NOT NULL,
    [EntryStartDate] Date NOT NULL,
    [EntryEndDate] Date NOT NULL,
    [EventStartDate] Date NOT NULL,
    [EventEndDate] Date NOT NULL,
    [LocationId] INT NOT NULL,
    [ThemeId] INT NOT NULL, 


    CONSTRAINT [FK_Events_Locations] FOREIGN KEY ([LocationId]) REFERENCES [Admin].[Locations]([Id]), 
    CONSTRAINT [FK_Events_Themes] FOREIGN KEY ([ThemeId]) REFERENCES [Admin].[Themes]([Id])

)
