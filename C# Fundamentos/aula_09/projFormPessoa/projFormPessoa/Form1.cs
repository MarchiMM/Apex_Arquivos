using projFormPessoa.Modelos;
using projFormPessoa.Servicos.CrudFuncionario;
using projFormPessoa.Utils;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Windows.Forms;

namespace projFormPessoa
{
    public partial class frmPessoa : Form
    {
        public frmPessoa()
        {
            InitializeComponent();
        }

        private void btnFiltrar_Click(object sender, EventArgs e)
        {
            Listar lista = new Listar();

            if (txbFiltroId.Text.Trim() == "")
            {
                gridFuncionario.DataSource = lista.ObterTodos();
            }
            else
            {
                int id = Convert.ToInt32(txbFiltroId.Text);

                DataTable tabela = lista.ObterPeloId(id);

                gridFuncionario.DataSource = tabela;

                if (tabela.Rows.Count == 0)
                {
                    MessageBox.Show("Funcionário não localizado!");
                }
            }
        }

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            SqlConnection conexao = Conexao.ObterConexao();

            try
            {
                conexao.Open();

                Funcionario funcionario = new Funcionario(
                    textNome.Text,
                    mtextCpf.Text.Replace(".", "").Replace("-", ""),
                    dtpDataNasc.Value.ToString("yyyy-MM-dd")
                );

                Incluir incluir = new Incluir();
                incluir.Inserir(conexao, funcionario);

                MessageBox.Show("Cadastro efetuado com sucesso!");
            }
            catch (Exception erro)
            {
                MessageBox.Show($"Erro ao salvar o funcionário: {erro.Message}");
                throw;
            }
            finally
            {
                conexao.Close();
            }
        }

        private void btnSelecionar_Click(object sender, EventArgs e)
        {
            int linha = gridFuncionario.CurrentRow.Index;

            textId.Text = gridFuncionario[0, linha].Value.ToString();
            textNome.Text = gridFuncionario[1, linha].Value.ToString();
            mtextCpf.Text = gridFuncionario[2, linha].Value.ToString();
            dtpDataNasc.Value =
                DateTime.ParseExact(
                    gridFuncionario[3, linha].Value.ToString(),
                    "dd/MM/yyyy HH:mm:ss",
                    CultureInfo.InvariantCulture
                );

            tabFuncionario.SelectedTab = tabPageCadastro;
        }

        private void btnAtualizar_Click(object sender, EventArgs e)
        {
            SqlConnection conexao = Conexao.ObterConexao();

            try
            {
                conexao.Open();

                Funcionario funcionario = new Funcionario(
                    Convert.ToInt32(textId.Text),
                    textNome.Text,
                    mtextCpf.Text.Replace(".", "").Replace("-", ""),
                    dtpDataNasc.Value.ToString("yyyy-MM-dd")
                );

                Atualizar atualizar = new Atualizar();
                atualizar.Update(conexao, funcionario);

                MessageBox.Show("Cadastro atualizado com sucesso!");
            }
            catch (Exception erro)
            {
                MessageBox.Show($"Erro ao atualizar o funcionário: {erro.Message}");
                throw;
            }
            finally
            {
                conexao.Close();
            }
        }
    }
}
