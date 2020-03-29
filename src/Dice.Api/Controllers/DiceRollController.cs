using System;
using Dice.Api.Models;
using Microsoft.AspNetCore.Http;
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
        public ActionResult<DiceRoll> Get(string dice)
        {
            if (dice is null)
            {
                return BadRequest();
            }

            var diceRoll = new DiceRoll
            {
                Dice = dice,
                Roll = RollDice(dice)
            };

            _logger.LogInformation($"Dice: {dice}, Roll: {diceRoll.Roll}");

            return diceRoll;
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