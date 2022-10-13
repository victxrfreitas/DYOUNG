
import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
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
        Looca looca = new Looca();        
        JdbcTemplate banco = con.getConnection();
       
        
        Double procDado = proc.getUso();
        Long memDado = mem.getEmUso();
        Double tempDado = temp.getTemperatura();
        String insert = "INSERT INTO dados VALUES(null, ?, ?, ?)";
        
        banco.update(insert, procDado, memDado, tempDado);
        
        System.out.println("Dados inseridos no banco");
        
        
        
//        System.out.println(memDado);
//        System.out.println("=========");
////        System.out.println(mem.getEmUso());
//System.out.println(temp.getTemperatura());
//        System.out.println("==================");
        
        
        

    }
}
