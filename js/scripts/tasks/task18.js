let i, j;
document.write("<table border=\"1\" cellspacing=\"0\" cellpadding=\"2\"align=\"center\">");
for (i = 2; i <= 10; i++) {
    document.write("<tr>");
    for (j = 2; j < 10; j++) {
        document.write("<td>" + j + "&times;" + i + "=" + (i * j) + "</td>")
    }
    document.write("</tr>")
}
document.write("</table>")