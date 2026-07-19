using System.ComponentModel.DataAnnotations;

namespace LibraryManagementAPI.DTOs;

public class LoanUpdateDto
{
    [Range(1, int.MaxValue)]
    public int BookId { get; set; }

    [Required]
    [MinLength(2)]
    public string UserId { get; set; } = string.Empty;

    public DateTime LoanDate { get; set; }

    public DateTime? ReturnDate { get; set; }
}