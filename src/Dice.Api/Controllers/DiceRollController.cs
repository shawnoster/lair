using System;
using Dice.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Dice.Api.Controllers
{
    [ApiController]
    [Route("diceroll")]
    public class DiceRollController : ControllerBase
    {
        private readonly ILogger<DiceRollController> _logger;

        public DiceRollController(ILogger<DiceRollController> logger)
        {
            _logger = logger;
        }

        // GET: diceroll/{dice}
        [HttpGet("{dice}")]
        public DiceRoll Get(string dice)
        {
            return new DiceRoll
            {
                Dice = dice,
                Roll = RollDice(dice)
            };
        }

        private int RollDice(string dice)
        {
            var individualDice = dice.ToLower().Split('d');

            Int32.TryParse(individualDice[0], out int dice_count);
            Int32.TryParse(individualDice[1], out int dice_type);

            return dice_count * new Random().Next(1, dice_type);
        }
    }
}