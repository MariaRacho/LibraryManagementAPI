using System.ComponentModel.DataAnnotations;

namespace LibraryManagementAPI.Models;

public class Category
{
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    // One category can have many books
    public ICollection<Book> Books { get; set; } = new List<Book>();
}