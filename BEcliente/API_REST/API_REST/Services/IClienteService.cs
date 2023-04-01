using API_REST.Models;
using System.Threading.Tasks;

namespace API_REST.Services
{
    public interface IClienteService
    {
        Task<List<Cliente>> GetAllClientes();
        Task<Cliente?> GetOneClient(Int64 id);
        Task<List<Cliente>> AddClient(Cliente client);
        Task<List<Cliente?>> UpdateClient(Int64 id, Cliente client);
        Task<List<Cliente?>> DeleteClient(Int64 id);
    }
}