using LibraryManagementAPI.Data;
using LibraryManagementAPI.DTOs;
using LibraryManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagementAPI.Services;

public class BookService
{
    private readonly AppDbContext _context;

    public BookService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<BookResponseDto>> GetAllAsync()
    {
        return await _context.Books
            .Select(book => new BookResponseDto
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                PublishedYear = book.PublishedYear,
                CategoryId = book.CategoryId
            })
            .ToListAsync();
    }

    public async Task<BookResponseDto?> GetByIdAsync(int id)
    {
        return await _context.Books
            .Where(book => book.Id == id)
            .Select(book => new BookResponseDto
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                PublishedYear = book.PublishedYear,
                CategoryId = book.CategoryId
            })
            .FirstOrDefaultAsync();
    }

    public async Task<BookResponseDto> CreateAsync(BookCreateDto dto)
    {
        var book = new Book
        {
            Title = dto.Title,
            Author = dto.Author,
            PublishedYear = dto.PublishedYear,
            CategoryId = dto.CategoryId
        };

        _context.Books.Add(book);
        await _context.SaveChangesAsync();

        return new BookResponseDto
        {
            Id = book.Id,
            Title = book.Title,
            Author = book.Author,
            PublishedYear = book.PublishedYear,
            CategoryId = book.CategoryId
        };
    }

    public async Task<bool> UpdateAsync(int id, BookUpdateDto dto)
    {
        var book = await _context.Books.FindAsync(id);

        if (book == null)
        {
            return false;
        }

        book.Title = dto.Title;
        book.Author = dto.Author;
        book.PublishedYear = dto.PublishedYear;
        book.CategoryId = dto.CategoryId;

        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var book = await _context.Books.FindAsync(id);

        if (book == null)
        {
            return false;
        }

        _context.Books.Remove(book);
        await _context.SaveChangesAsync();

        return true;
    }
}