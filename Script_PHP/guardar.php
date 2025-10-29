<?php
echo "<h2>✅ Datos recibidos desde el formulario de producto:</h2>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";

    echo "<hr><h3>Resumen de datos:</h3>";
    echo "<ul>";
    echo "<li><strong>Nombre del Producto:</strong> " . htmlspecialchars($_POST["txtNombre"]) . "</li>";
    echo "<li><strong>Descripción:</strong> " . htmlspecialchars($_POST["txtaDescripcion"]) . "</li>";
    echo "<li><strong>Precio:</strong> $" . htmlspecialchars($_POST["txtPrecio"]) . "</li>";
    echo "<li><strong>Impuesto:</strong> " . htmlspecialchars($_POST["cmbImpuesto"]) . "%</li>";
    echo "<li><strong>Promoción:</strong> " . htmlspecialchars($_POST["rbPromocion"]) . "</li>";
    echo "<li><strong>Información confidencial:</strong> " . (isset($_POST["ckboxLogistica"]) ? "Sí" : "No") . "</li>";
    echo "</ul>";
} else {
    echo "<p>❌ No se recibieron datos por método POST.</p>";
}
?>
