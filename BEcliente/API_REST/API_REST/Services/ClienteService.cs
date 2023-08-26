using API_REST.Data;
using API_REST.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API_REST.Services
{
    public class ClienteService : IClienteService
    {

        private readonly DataContext _dataContext;

        public ClienteService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<Cliente>> AddClient(Cliente client)
        {
            _dataContext.Cliente.Add(client);
            await _dataContext.SaveChangesAsync();
            return await _dataContext.Cliente.ToListAsync();
        }

        public async Task<List<Cliente?>> DeleteClient(Int64 id)
        {
            var cliente = await _dataContext.Cliente.FindAsync(id);
            if (cliente == null)
            {
                return null;
            }
            
            _dataContext.Cliente.Remove(cliente);

            await _dataContext.SaveChangesAsync();
             
            return await _dataContext.Cliente.ToListAsync();
        }

        public async Task<List<Cliente>> GetAllClientes()
        {
            var clientes = await _dataContext.Cliente.ToListAsync();
            return clientes;
        }

        public async Task<List<Cliente>> SeachUsers(string term)
        {
            var cliente = await _dataContext.Cliente.Where(c => c.Nombre.ToLower().Contains(term.ToLower().Trim()) || c.Apellido.ToLower().Contains(term.ToLower().Trim()))
                .ToListAsync();
            if (cliente.LongCount() == 0 )
            {
                return null;
            }

            return cliente;
        }

        public async Task<List<Cliente?>> UpdateClient(Int64 id, Cliente client)
        {
            var cliente = await _dataContext.Cliente.FindAsync(id);
            if (cliente == null)
            {
                return null;
            }

            cliente.Nombre = client.Nombre;
            cliente.Apellido = client.Apellido;
            cliente.TelCelular = client.TelCelular;
            cliente.Email = client.Email;
            cliente.CUIT = client.CUIT;
            cliente.Domicilio = client.Domicilio;
            cliente.FechaNacimiento = client.FechaNacimiento;

            await _dataContext.SaveChangesAsync();

            return await _dataContext.Cliente.ToListAsync();
        }
    }
}