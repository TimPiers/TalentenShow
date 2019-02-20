CREATE TABLE [TalentShow].[Participants]
(
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [FirstName] VARCHAR(100) NOT NULL,
    [Prefix] VARCHAR(20) NULL,
    [LastName] VARCHAR(100) NOT NULL,
    [BirthDate] Date NOT NULL
)
