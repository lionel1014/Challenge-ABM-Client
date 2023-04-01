using API_REST.Models;
using API_REST.Services;
using Microsoft.AspNetCore.Mvc;

namespace API_REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IClienteService _clienteService;
        public ClienteController(IClienteService clienteService) 
        {
            _clienteService = clienteService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Cliente>>> GetAllClientes()
        {
            return await _clienteService.GetAllClientes();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetAllClientes( Int64 id )
        {
            var cliente =  await _clienteService.GetOneClient(id);
            if ( cliente == null )
            {
                return NotFound();
            }
            return Ok(cliente);
        }

        [HttpPost]
        public async Task<ActionResult<List<Cliente>>> AddNewCliente( Cliente clienteBody)
        {
            var clientes = await _clienteService.AddClient(clienteBody);
            return Ok(clientes);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<Cliente>>> UpdateCliente(int id, Cliente clienteBody)
        {
            var clientes = await _clienteService.UpdateClient(id, clienteBody);
            if ( clientes == null)
            {
                return NotFound("Cliente no encontrado para actualizar");
            }
            return Ok(clientes);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Cliente>>> DeleteCliente(int id)
        {
            var clientes = await _clienteService.DeleteClient(id);
            if (clientes == null)
            {
                return NotFound("Cliente no encontrado para borrar");
            }
            return Ok(clientes);
        }
    }
}
