public class LoanUpdateDto
{
    public int BookId { get; set; }

    public string UserId { get; set; } = string.Empty;

    public DateTime LoanDate { get; set; }

    public DateTime? ReturnDate { get; set; }
}