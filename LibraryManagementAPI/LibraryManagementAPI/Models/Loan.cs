namespace LibraryManagementAPI.Models;

public class Loan
{
    public int Id { get; set; }

    public DateTime LoanDate { get; set; }

    public DateTime? ReturnDate { get; set; }

    // Foreign key
    public int BookId { get; set; }

    // Navigation property
    public Book? Book { get; set; }

    public string UserId { get; set; } = string.Empty;
}