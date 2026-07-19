using LibraryManagementAPI.Data;
using LibraryManagementAPI.DTOs;
using LibraryManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagementAPI.Services;

public class LoanService
{
    private readonly AppDbContext _context;

    public LoanService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<LoanResponseDto>> GetAllAsync()
    {
        return await _context.Loans
            .Include(loan => loan.Book)
            .Select(loan => new LoanResponseDto
            {
                Id = loan.Id,
                BookId = loan.BookId,
                BookTitle = loan.Book != null ? loan.Book.Title : string.Empty,
                UserId = loan.UserId,
                LoanDate = loan.LoanDate,
                ReturnDate = loan.ReturnDate
            })
            .ToListAsync();
    }

    public async Task<LoanResponseDto?> GetByIdAsync(int id)
    {
        return await _context.Loans
            .Include(loan => loan.Book)
            .Where(loan => loan.Id == id)
            .Select(loan => new LoanResponseDto
            {
                Id = loan.Id,
                BookId = loan.BookId,
                BookTitle = loan.Book != null ? loan.Book.Title : string.Empty,
                UserId = loan.UserId,
                LoanDate = loan.LoanDate,
                ReturnDate = loan.ReturnDate
            })
            .FirstOrDefaultAsync();
    }

    public async Task<LoanResponseDto> CreateAsync(LoanCreateDto dto)
    {
        var loan = new Loan
        {
            BookId = dto.BookId,
            UserId = dto.UserId,
            LoanDate = dto.LoanDate,
            ReturnDate = dto.ReturnDate
        };

        _context.Loans.Add(loan);
        await _context.SaveChangesAsync();

        return new LoanResponseDto
        {
            Id = loan.Id,
            BookId = loan.BookId,
            BookTitle = string.Empty,
            UserId = loan.UserId,
            LoanDate = loan.LoanDate,
            ReturnDate = loan.ReturnDate
        };
    }

    public async Task<bool> UpdateAsync(int id, LoanUpdateDto dto)
    {
        var loan = await _context.Loans.FindAsync(id);

        if (loan == null)
        {
            return false;
        }

        loan.BookId = dto.BookId;
        loan.UserId = dto.UserId;
        loan.LoanDate = dto.LoanDate;
        loan.ReturnDate = dto.ReturnDate;

        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var loan = await _context.Loans.FindAsync(id);

        if (loan == null)
        {
            return false;
        }

        _context.Loans.Remove(loan);
        await _context.SaveChangesAsync();

        return true;
    }
}