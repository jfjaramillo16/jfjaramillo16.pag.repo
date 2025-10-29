<?php
echo "<h2>✅ Datos recibidos desde el formulario de dirección:</h2>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";

    echo "<hr><h3>📍 Resumen:</h3>";
    echo "<ul>";
    echo "<li><strong>Calle Principal:</strong> " . htmlspecialchars($_POST["txtPrincipal"]) . "</li>";
    echo "<li><strong>Transversal:</strong> " . htmlspecialchars($_POST["txtTransversal"]) . "</li>";
    echo "<li><strong>Entrega al Propietario:</strong> " . (isset($_POST["chbEntrega1"]) ? "Sí" : "No") . "</li>";
    echo "<li><strong>Entrega a un Tercero:</strong> " . (isset($_POST["chbEntrega2"]) ? "Sí" : "No") . "</li>";
    echo "<li><strong>Cantón:</strong> " . htmlspecialchars($_POST["cmbCantones"]) . "</li>";
    echo "</ul>";
} else {
    echo "<p>❌ No se recibieron datos por método POST.</p>";
}
?>
