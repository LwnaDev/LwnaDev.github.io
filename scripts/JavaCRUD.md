![Javacrud](https://raw.githubusercontent.com/LwnaDev/java-crud-alumnos/main/src/resources/img/reg.png)

# Installation
* The complete guide can be found at [GitHub](https://github.com/LwnaDev/java-crud-alumnos)
* The complete documentation can be found [Docs](https://github.com/LwnaDev/java-crud-alumnos/blob/main/DocCalificaciones.pdf)

<h1 align="center">☕ JAVA CRUD Alumnos ☕</h1>
<p align="center">
  Java CRUD for the registration, edition and delete of students of a school, this registration works with MySQL database. Using NetBeans
</p>

> This project was made for learning purposes only, Any errors that may be found must be corrected by yourself.

user: admin@root.com password: root

mysql connector for java is located in driver folder
# How to use
## Step 1⃣
* Import the project to your netbeans folder
## Step 2
* Open the project, check for errors and then compile and run.
## Step 3
* If you have already connected the database and everything works, you can compile the project to .jar

# Download
Available only for Windows.

# Complete Documentation

[Docs](https://github.com/LwnaDev/java-crud-alumnos/blob/main/DocCalificaciones.pdf)

# License
💜 [MIT License](https://github.com/LwnaDev/java-crud-alumnos/blob/main/LICENSE)

### Code Example

```java
 private void btnEliminarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEliminarActionPerformed
        // Boton para eliminar
        int row = Tabla.getSelectedRow();
        String id = Tabla.getModel().getValueAt(row, 0).toString();
        String sql = "DELETE FROM alumnos WHERE NumeroLista ="+id+"";
        int dialogButton = JOptionPane.showConfirmDialog (null, "¿Esta Seguro?","ALERTA",JOptionPane.YES_NO_OPTION);
        if(dialogButton == 0){
            try {
                  stmt = conn.createStatement();
                  if(stmt.executeUpdate(sql) == 1){
                    JOptionPane.showMessageDialog(null,"Se elimino con exito","ALERTA",JOptionPane.INFORMATION_MESSAGE);
                    // Refrescar la ventana para mostrar los dataos actualizados
                    this.setVisible(false);
                    new FRegistro().setVisible(true);
                    
                } else {
                    JOptionPane.showMessageDialog(null,"Error al eliminar","ALERTA",JOptionPane.WARNING_MESSAGE);
                }
            } catch(Exception ex) {
                System.out.println("Error: "+ex);
            }
        }
```