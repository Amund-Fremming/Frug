using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace backend;

[Route("frug")]
[ApiController]
public class Controller : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult> GetAllQuestions()
    {
        return Ok("All questions");
    }

    [HttpPost]
    public async Task<ActionResult> AddQuestion([FromQuery] string question, [FromQuery] string gameId)
    {
        return Ok($"Added question: {question} , to gamme: {gameId}");
    }
}