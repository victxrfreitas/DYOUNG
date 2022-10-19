
import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscosGroup;
import com.github.britooo.looca.api.group.discos.Volume;
import com.github.britooo.looca.api.group.sistema.Sistema;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.temperatura.Temperatura;
import com.github.britooo.looca.api.util.Conversor;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import oshi.hardware.HWDiskStore;

public class Teste {

    public static void main(String[] args) {
        Conexao con = new Conexao();
        Processador proc = new Processador();
        Memoria mem = new Memoria();
        Temperatura temp = new Temperatura();
        Conversor conversor = new Conversor();
        Sistema sistema = new Sistema();
        Looca looca = new Looca();
        JdbcTemplate banco = con.getConnection();
        DiscosGroup discoGrupo = new DiscosGroup();

        List<Disco> discos = discoGrupo.getDiscos();

        Double procDado = proc.getUso();
        Long memDado = mem.getEmUso();
        Double tempDado = temp.getTemperatura();
        String insert = "INSERT INTO dado_cpu VALUES(null, ?, null, 1,null,null)";

        banco.update(insert, procDado);

        System.out.println("Dados inseridos no banco");

        // Puxar infos do disco precisa desse for
        for (Disco disco : discos) {
            System.out.println("Tamanho do disco: " + conversor.formatarBytes(disco.getTamanho()));
            System.out.println(conversor.formatarBytes(disco.getBytesDeLeitura()));

            System.out.println(conversor.formatarBytes(disco.getLeituras()));

            System.out.println(conversor.formatarBytes(disco.getBytesDeEscritas()));

            System.out.println(conversor.formatarBytes(disco.getEscritas()));

        }

        // Coisas pra aparecer no JFrame
        String teste = proc.getNome();
        String teste2 = conversor.formatarBytes(mem.getTotal());
        String SO = sistema.getSistemaOperacional();
        Integer numeroBits = sistema.getArquitetura();

        System.out.println("Nome processador: " + teste);
        System.out.println("Total de memória: " + teste2);
        System.out.println("Sistema Operacional: " + SO);
        System.out.println(numeroBits + " bits");
    }
}
