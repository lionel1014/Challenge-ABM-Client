using API_REST.Models;
using API_REST.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

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

        [HttpGet("GetAllClientes")]
        public async Task<ActionResult<List<Cliente>>> GetAllClientes()
        {
            return await _clienteService.GetAllClientes();
        }

        [HttpGet("SeachUserByNameOrLastname/{term}")]
        public async Task<ActionResult<Cliente>> SeachUserByNameOrLastname( string term )
        {
            var cliente =  await _clienteService.SeachUsers(term);
            if ( cliente == null )
            {
                return NotFound("Cliente no encontrado");
            }
            return Ok(cliente);
        }

        [HttpPost("AddNewCliente")]
        public async Task<ActionResult<List<Cliente>>> AddNewCliente( Cliente clienteBody)
        {
            if (clienteBody.Nombre.IsNullOrEmpty() || clienteBody.Apellido.IsNullOrEmpty() || clienteBody.CUIT.IsNullOrEmpty() )
            {
                return BadRequest("Falto en agregar un campo");
            }
            if (clienteBody.Id.HasValue)
            {
                return BadRequest("El usuario no puede contener un ID");
            }
            var clientes = await _clienteService.AddClient(clienteBody);
            return Ok(clientes);
        }

        [HttpPut("UpdateCliente/{id}")]
        public async Task<ActionResult<List<Cliente>>> UpdateCliente(int id, Cliente clienteBody)
        {
            var clientes = await _clienteService.UpdateClient(id, clienteBody);
            if ( clientes == null)
            {
                return NotFound("Cliente no encontrado para actualizar");
            }
            return Ok(clientes);
        }

        [HttpDelete("DeleteCliente/{id}")]
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
