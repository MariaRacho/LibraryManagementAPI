using System.ComponentModel.DataAnnotations;

namespace LibraryManagementAPI.Models;

public class Book
{
    public int Id { get; set; }

    [Required]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Author { get; set; } = string.Empty;

    public int PublishedYear { get; set; }

    // Foreign key
    public int CategoryId { get; set; }

    // Navigation property
    public Category? Category { get; set; }

    // One book can have many loans
    public ICollection<Loan> Loans { get; set; } = new List<Loan>();
}