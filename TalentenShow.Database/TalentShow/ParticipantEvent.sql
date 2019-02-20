CREATE TABLE [TalentShow].[ParticipantEvent]
(
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [ParticipantId] INT NOT NULL,
    [EventId] INT NOT NULL,
    [Code] VARCHAR(100) NULL, 

    CONSTRAINT [FK_ParticipantEvent_Event] FOREIGN KEY ([EventId]) REFERENCES [TalentShow].[Events]([Id]), 
    CONSTRAINT [FK_ParticipantEvent_Participant] FOREIGN KEY ([ParticipantId]) REFERENCES [TalentShow].[Participants]([Id])
)
