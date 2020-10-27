using System;
using projetoCalculadora.Servicos;

namespace projetoCalculadora
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Informe o primeiro número: ");
            double n1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Informe o segundo número: ");
            double n2 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Informe a operação (+, -, *, /): ");
            string operacao = Console.ReadLine();

            Calculadora objCalculadora = new Calculadora(n1, n2, operacao);

            Console.WriteLine($"O resultado é: {objCalculadora.EfetuarCalculo()}");
        }
    }
}
