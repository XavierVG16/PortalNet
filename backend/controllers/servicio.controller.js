const pool = require("../database");

const servicioCtrl = {};
servicioCtrl.getServicios = async (req, res, next) => {
  const servicio = await pool.query("select * from plan_servicio");

  res.json(servicio);
};

servicioCtrl.createServicio = async (req, res, next) => {
  const { nombre_plan, descripcion , precio , cantidad_megas, comparticion} = req.body;
  const subida_kbps = cantidad_megas * 1024;
  const bajada_kbps = cantidad_megas * 1024;
  const m_subida_kbps = subida_kbps/ 4;
  const m_bajada_kbps = bajada_kbps /4;

  const newServicio = {
    nombre_plan,
    descripcion,
    precio,
    cantidad_megas,
    subida_kbps,
    bajada_kbps, comparticion, m_subida_kbps, m_bajada_kbps
  };
const servicio =  await pool.query('insert into plan_servicio  set ?', newServicio);
 
  res.json({ status: 'Categoria creada' });
};
servicioCtrl.getServicio = async (req, res, next) => {
  const { id } = req.params;
  const servicio = await pool.query('SELECT * FROM plan_servcio WHERE idplan_servicio =  ?', [id]);
  res.json(servicio);
};

servicioCtrl.editServicio = async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  const { nombre_plan, descripcion, precio, cantidad_megas, comparticion } = req.body;
  const subida_kbps = cantidad_megas * 1024 ;
  const bajada_kbps = cantidad_megas * 1024;
  const m_subida_kbps = subida_kbps / 4;
  const m_bajada_kbps = bajada_kbps / 4;
  const edCategoria = {
    nombre_plan,
    descripcion,
    precio,
    cantidad_megas,
    subida_kbps,
    bajada_kbps,  comparticion, m_subida_kbps, m_bajada_kbps
  };
  await pool.query('UPDATE plan_servicio set ? WHERE idplan_servicio = ?', [edCategoria, id]);
  res.json({ status: 'Servicio Updated' });
};

servicioCtrl.deleteServicio = async (req, res, next) => {
  const { id } = req.params;
  await pool.query('DELETE FROM plan_servicio WHERE idplan_servicio = ?', [id]);
  res.json({ status: 'Servicio Deleted' });
};

module.exports = servicioCtrl;