namespace API_REST.Models
{
    public class Cliente
    {
        public Int64? Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string CUIT { get; set; }
        public string Domicilio { get; set; }
        public string TelCelular { get; set; }
        public string Email { get; set; }

        public Cliente(Int64? id, string nombre, string apellido, DateTime fechaNacimiento, string cUIT, string domicilio, string telCelular, string email)
        {
            Id = id;
            Nombre = nombre;
            Apellido = apellido;
            FechaNacimiento = fechaNacimiento;
            CUIT = cUIT;
            Domicilio = domicilio;
            TelCelular = telCelular;
            Email = email;
        }
    }
}
