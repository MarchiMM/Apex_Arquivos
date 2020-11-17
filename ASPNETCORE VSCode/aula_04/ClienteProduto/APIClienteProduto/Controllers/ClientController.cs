using System;
using System.Threading.Tasks;
using APIClienteProduto.Data.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace APIClienteProduto.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IRepositoryClient _repositoryClient;

        public ClientController(IRepositoryClient repositoryClient)
        {
            this._repositoryClient = repositoryClient;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repositoryClient.GetAllAsync(includeProduct: true);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}