<template>
  <div class="card">
    <div class="table-concept">
      <input
        class="table-radio"
        type="radio"
        name="table_radio"
        id="table_radio_0"
        checked="checked"
      />
      <div class="table-display">Showing 1 to 20 of 95 items</div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Administradores</th>
            <th>Área</th>
            <th>Email</th>
            <th>Estatus</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          <TableRowComponent
            :name="'Gustavo Korsgaard'"
            :area="'Recursos Humanos'"
            email="'correo@gmail.com'"
            :status="'activo'"
            :image="'user_1'"
          />
          <TableRowComponent
            :name="'Maria Dias'"
            :area="'Recursos Humanos'"
            email="'correo@gmail.com'"
            :status="'activo'"
            :image="'user_2'"
          />
          <TableRowComponent
            :name="'Maren Stanton'"
            :area="'Recursos Humanos'"
            email="'correo@gmail.com'"
            :status="'inactivo'"
            :image="'user_3'"
          />
          <TableRowComponent
            :name="'Paityn Ekstrom'"
            :area="'Recursos Humanos'"
            email="'correo@gmail.com'"
            :status="'activo'"
            :image="'user_4'"
          />
          <TableRowComponent
            :name="'Kierra Bergson'"
            :area="'Recursos Humanos'"
            email="'correo@gmail.com'"
            :status="'activo'"
            :image="'user_5'"
          />
          <TableRowComponent
            :name="'Talan Rosser'"
            :area="'Recursos Humanos'"
            email="'correo@gmail.com'"
            :status="'activo'"
            :image="'user_6'"
          />
        </tbody>
      </table>
      <div class="pagination">
        <label>Rows per page:</label>
        <select name="pages" id="pages">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label> 1-10 of 100</label>

        <label class="table_radio_2"
          ><svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.51183 11.2812L2.67952 6.5L6.51183 1.71875L5.33202 0.25L0.311523 6.5L5.33202 12.75L6.51183 11.2812Z"
              fill="#323232"
            />
          </svg>
        </label>
        <label
          ><svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.713867 11.2812L4.54617 6.5L0.713867 1.71875L1.89368 0.25L6.91416 6.5L1.89368 12.75L0.713867 11.2812Z"
              fill="#323232"
            />
          </svg>
        </label>
      </div>
      <input
        class="table-radio"
        type="radio"
        name="table_radio"
        id="table_radio_4"
      />
    </div>
  </div>
</template>

<script>
import TableRowComponent from "./TableRowComponent.vue";
export default { components: { TableRowComponent } };
</script>

<style>
.card {
  background-color: #ffffff;
  margin: 2rem 0;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
.table-concept {
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.table-concept .table-radio {
  display: none;
}
.table-concept .table-radio:checked + .table-display {
  display: none;
}
.table-concept .table-radio:checked + .table-display + table {
  width: 100%;
  display: table;
}
.table-concept .table-radio:checked + .table-display + table + .pagination {
  display: flex;
}
.table-concept
  .table-radio:checked
  + .table-display
  + table
  + .pagination
  > label.active {
  color: #ffffff;
  background-color: dimgrey;
  cursor: default;
}
.table-concept
  .table-radio:checked
  + .table-display
  + table
  + .pagination
  > label.disabled {
  color: #ffffff;
  background-color: #b5b5b5;
  cursor: default;
}
.table-concept .table-display {
  background-color: #e2e2e2;
  text-align: right;
  padding: 10px;
  display: none;
  position: sticky;
  left: 0;
}
.table-concept table {
  background-color: #ffffff;
  font-size: 16px;
  border-collapse: collapse;
  display: none;
}
.table-concept table tr:last-child td {
  border-bottom: 0;
}
.table-concept table tr th,
.table-concept table tr td {
  text-align: left;
  padding: 15px;
  box-sizing: border-box;
}
.table-concept table tr th {
  font-weight: normal;
  position: sticky;
  top: 0;
  font-weight: 600;
}
.table-concept table tr td {
  border: solid 1px #d8d8d8;
  border-left: 0;
  border-right: 0;
  white-space: nowrap;
}
.table-concept table tbody tr {
  transition: background-color 150ms ease-out;
}
.table-concept table tbody tr:nth-child(2n) {
}
.table-concept table tbody tr:hover {
  background-color: #ebebeb;
}
.table-concept .pagination {
  display: flex;
  justify-content: flex-end;
  color: black;
}
.table-concept .pagination > label {
  padding: 10px;
  cursor: pointer;
}
.table-concept .pagination > select {
  padding: 0 6rem;
  border: none;
}
.table-concept .pagination .table_radio_2 {
  margin-right: 2rem;
}
.table-concept .pagination > label:hover {
  background-color: darkgrey;
}
.table-concept .pagination > label:active {
  background-color: #767676;
}
.table-title {
  color: #ffffff;
  background-color: #2f2f2f;
  padding: 15px;
}
.table-title h2 {
  margin: 0;
  padding: 0;
}
.button-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
}
.button-container span {
  color: #8f8f8f;
  text-align: right;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
}
.button-container button {
  font-family: inherit;
  font-size: inherit;
  color: #ffffff;
  padding: 10px 15px;
  border: 0;
  margin: 0;
  outline: 0;
  border-radius: 0;
  transition: background-color 225ms ease-out;
}
.button-container button.primary {
  background-color: #147eff;
}
.button-container button.primary:hover {
  background-color: #479aff;
}
.button-container button.primary:active {
  background-color: #0065e0;
}
.button-container button.primary {
  background-color: #147eff;
}
.button-container button.primary:hover {
  background-color: #479aff;
}
.button-container button.primary:active {
  background-color: #0065e0;
}
.button-container button.danger {
  background-color: #d11800;
}
.button-container button.danger:hover {
  background-color: #ff2205;
}
.button-container button.danger:active {
  background-color: #9e1200;
}
.button-container button svg {
  fill: #ffffff;
  vertical-align: middle;
  padding: 0;
  margin: 0;
}
</style>
