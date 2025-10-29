<?php
echo "<h2>🔒 Datos recibidos desde el formulario de información confidencial:</h2>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";

    echo "<hr><h3>📋 Resumen:</h3>";
    echo "<ul>";
    echo "<li><strong>Código Postal:</strong> " . htmlspecialchars($_POST["pswCodigoPostal"]) . "</li>";
    echo "<li><strong>Referencia:</strong> " . htmlspecialchars($_POST["Mensaje"]) . "</li>";
    echo "</ul>";
} else {
    echo "<p>❌ No se recibieron datos por método POST.</p>";
}
?>
