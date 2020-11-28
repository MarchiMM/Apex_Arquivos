using System.Linq;
using System.Threading.Tasks;
using EscolaApexWebApi.Data.Interfaces;
using EscolaApexWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EscolaApexWebApi.Data.Services
{
    public class RepositorioAluno : IRepositorioAluno
    {
        private readonly DataContext _contexto;

        public RepositorioAluno(DataContext contexto)
        {
            this._contexto = contexto;
        }

        public async Task<Aluno[]> ObterTodosAsync(bool incluirProfessor)
        {
            IQueryable<Aluno> consulta = _contexto.Aluno;

            if (incluirProfessor)
            {
                consulta = consulta.Include(a => a.AlunosDisciplinas)
                                   .ThenInclude(ad => ad.Disciplina)
                                   .ThenInclude(d => d.Professor);
            }

            consulta = consulta.AsNoTracking().OrderBy(a => a.Id);
            // AsNoTracking - "fazer sem nenhuma ação" (tira a permissão
            // de alterar ou deletar os registros)

            return await consulta.ToArrayAsync();
        }

        public async Task<Aluno[]> ObterTodosPelaDisciplinaIdAsync(int disciplinaId, bool incluirDisciplina)
        {
            IQueryable<Aluno> consulta = _contexto.Aluno;

            if (incluirDisciplina)
            {
                consulta = consulta.Include(a => a.AlunosDisciplinas)
                                   .ThenInclude(ad => ad.Disciplina);
            }

            consulta = consulta.AsNoTracking()
                               .OrderBy(a => a.Id)
                               .Where(
                                   a => a.AlunosDisciplinas.Any(
                                       ad => ad.DisciplinaId == disciplinaId
                                   )
                               );
            return await consulta.ToArrayAsync();
        }

        public async Task<Aluno> ObterAlunoPeloIdAsync(int alunoId, bool incluirProfessor)
        {
            IQueryable<Aluno> consulta = _contexto.Aluno;
            // IQueryable - faz uma consulta em tal tabela na base de dados

            if (incluirProfessor)
            {
                consulta = consulta.Include(a => a.AlunosDisciplinas)
                                   .ThenInclude(ad => ad.Disciplina)
                                   .ThenInclude(d => d.Professor);
            }
            // Este if é útil!

            consulta = consulta.AsNoTracking()
                               .OrderBy(a => a.Id)
                               .Where(a => a.Id == alunoId);

            return await consulta.FirstOrDefaultAsync();
        }
    }
}