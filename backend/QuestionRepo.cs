using Data;
using Microsoft.EntityFrameworkCore;
using Model;

namespace Repository;

public class QuestionRepo
{
    public readonly AppDbContext _context;

    public QuestionRepo(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Question>> GetGameQuestionsAsync(int gameId)
    {
        return await _context.Questions.Where(q => q.GameId == gameId).ToListAsync();
    }   

    public async Task AddQuestionAsync(Question question)
    {
        _context.Add(question);
        await _context.SaveChangesAsync();
    }
}