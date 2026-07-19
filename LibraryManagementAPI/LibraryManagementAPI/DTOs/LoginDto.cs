using System.ComponentModel.DataAnnotations;

namespace LibraryManagementAPI.DTOs;

public class LoginDto
{
    [Required]
    [MinLength(2)]
    public string Username { get; set; } = string.Empty;

    [Required]
    [MinLength(6)]
    public string Password { get; set; } = string.Empty;
}