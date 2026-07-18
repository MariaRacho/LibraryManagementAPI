using System.ComponentModel.DataAnnotations;

namespace LibraryManagementAPI.DTOs;

public class LoanCreateDto
{
    [Required]
    public int BookId { get; set; }

    [Required]
    public string UserId { get; set; } = string.Empty;

    public DateTime LoanDate { get; set; }

    public DateTime? ReturnDate { get; set; }
}