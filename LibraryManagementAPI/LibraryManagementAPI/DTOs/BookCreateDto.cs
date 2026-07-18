using System.ComponentModel.DataAnnotations;

namespace LibraryManagementAPI.DTOs;

public class BookCreateDto
{
    [Required]
    [StringLength(100)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string Author { get; set; } = string.Empty;

    [Range(1000, 2100)]
    public int PublishedYear { get; set; }

    public int CategoryId { get; set; }
}