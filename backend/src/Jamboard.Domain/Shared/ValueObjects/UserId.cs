namespace Jamboard.Domain.Shared.ValueObjects;

public record UserId
{
    private UserId(Guid value)
    {
        Value = value;
    }
    
    public Guid Value { get; }

    public static UserId NewUserId() => new(Guid.NewGuid());
    public static UserId Create(Guid id) => new(id);
};