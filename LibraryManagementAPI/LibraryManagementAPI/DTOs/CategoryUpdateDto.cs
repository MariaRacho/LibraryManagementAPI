using System.ComponentModel.DataAnnotations;

namespace LibraryManagementAPI.DTOs;

public class CategoryUpdateDto
{
    [Required]
    [StringLength(50)]
    public string Name { get; set; } = string.Empty;
}