using System;
using System.Threading.Tasks;
using EscolaApexWebApi.Data.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EscolaApexWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DisciplinaController : ControllerBase
    {
        private readonly IRepositorio _repositorio;
        private readonly IRepositorioDisciplina _repositorioDisciplina;

        public DisciplinaController(IRepositorio repositorio,
                                    IRepositorioDisciplina repositorioDisciplina)
        {
            this._repositorio = repositorio;
            this._repositorioDisciplina = repositorioDisciplina;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(
                    await _repositorioDisciplina.ObterTodasAsync(incluirProfessor: true)
                );
            }
            catch (Exception ex)
            {
                return BadRequest($"Ao obter todas as disciplinas, ocorreu o erro: {ex.Message}");
            }
        }

        [HttpGet("disciplinaid={disciplinaId}")]
        public async Task<IActionResult> GetById(int disciplinaId)
        {
            try
            {
                return Ok(
                    await _repositorioDisciplina.ObterDisciplinaPeloIdAsync(disciplinaId, incluirProfessor: true)
                );
            }
            catch (Exception ex)
            {
                return BadRequest($"Ao obter a disciplina, ocorreu o erro: {ex.Message}");
            }
        }
    }
}