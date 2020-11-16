using System.Linq;
using System.Collections.Generic;
using ExercicioComplementar.Repositorio;
using ExercicioComplementar.Modelos;
using ExercicioComplementar.Servicos.ProdutoRepositorio;

namespace ExercicioComplementar.Servicos.ClienteRepositorio
{
    public class ClienteRepositorioServico : IRepositorioCliente
    {
        public List<Cliente> ListaDeClientes { get; set; }

        public ClienteRepositorioServico()
        {
            this.ListaDeClientes = new List<Cliente>();
        }

        public void Incluir(Cliente cliente)
        {
            this.ListaDeClientes.Add(cliente);
        }
        public void Excluir(int id)
        {
            this.ListaDeClientes.RemoveAll(c => c.Id == id);
        }
        public List<Cliente> ObterTodos()
        {
            return this.ListaDeClientes;
        }
        public Cliente ObterPeloId(int id)
        {
            return this.ListaDeClientes.Where(c => c.Id == id).FirstOrDefault();
        }
        public string ObterClienteEListaDeProdutos(int idCliente, ProdutoRepositorioServico produtoServico)
        {
            return $"-------------------------------------------------------\n" + 
                   $"CLIENTE\n" + 
                   $"-------------------------------------------------------\n" + 
                   $"**** ID: {ObterPeloId(idCliente).Id} - Nome: {ObterPeloId(idCliente).Nome}\n" + 
                   $"-------------------------------------------------------\n" + 
                   $"PRODUTOS\n" + 
                   $"-------------------------------------------------------\n" + 
                   $"**** ID: {produtoServico.ObterPeloIdDoCliente(idCliente).ForEach(p => p.Id)}" + 
                   $"-------------------------------------------------------\n";
        }
    }
}