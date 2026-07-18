namespace LibraryManagementAPI.Models;

public class Loan
{
    public int Id { get; set; }

    public DateTime LoanDate { get; set; }

    public DateTime? ReturnDate { get; set; }

    public int BookId { get; set; }

    public string UserId { get; set; } = string.Empty;
}