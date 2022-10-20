package com.mycompany.dyoung.project02;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.sistema.Sistema;
import com.github.britooo.looca.api.util.Conversor;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author gutyc
 */
public class Logado extends javax.swing.JFrame {

    /**
     * Creates new form Logado
     */
    public Logado() {
        initComponents();
        Conexao con = new Conexao();
        JdbcTemplate banco = con.getConnection();
        Conversor convert = new Conversor();
        Conversor02 convert02 = new Conversor02();
        Processador cpu = new Processador();
        Memoria mem = new Memoria();
        DiscoGrupo discoGrupo = new DiscoGrupo();
        Sistema sistema = new Sistema();
        

        
        new Timer().scheduleAtFixedRate(new TimerTask(){
            @Override
            public void run(){
                
                //Pegando os dados da CPU = Processador exibindo e guardando no banco de dados
                Double dadoCpu = cpu.getUso();
//                String insert = "INSERT INTO dado_cpu VALUES (null, ?, current_timestamp, null, 1, 1);";
//                banco.update(insert, dadoCpu);
                System.out.println(String.format("Inserindo dado CPU: %.0f", dadoCpu));
                lblDadoCpu.setText(String.format("%.0f %s", dadoCpu, "%"));
                
                
                //Pegando os dados da RAM = Memória RAM transformando, exibindo 
                //e guardando no banco de dados
                //Os dados da memoria chegam em "LONG", porem temos que converter
                //para double e fazer a conta para calcular a porcentagem de uso
                Long dadoMemoriaRam = mem.getEmUso();
                Long dadoTotalMemoriaRam = mem.getTotal();
                
                //Convertendo os dados para "String" para ficar mais faceis de transformar em double
                String dadoRamString = Conversor02.formatarBytes(dadoMemoriaRam);
                String dadoTotalRamString = Conversor02.formatarBytes(dadoTotalMemoriaRam);
                
                //Tranformando os dados de "String" para "Double"
                Double dadoRamDouble = Double.valueOf(dadoRamString);
                Double dadoTotalRamlDouble = Double.valueOf(dadoTotalRamString);
                
                // Realizando a conta para calcular a porcentagem de uso
                Double totalRam = (dadoRamDouble * 100) / dadoTotalRamlDouble;
                
                //Inserindo os dados no banco
//                String insertRam = "INSERT INTO dado_ram VALUES (null, ?, current_timestamp, null, 1, 1);";
//                banco.update(insertRam, totalRam);
                
                //Exibindo os dados
                System.out.println(String.format("Inserindo dado da Memória RAM: %.0f", totalRam));
                lblDadoRam.setText(String.format("%.0f %s", totalRam, "%"));
                
                
                //Pegando os dados do DISCO = Disco transformando, exibindo e guardando no banco de dados
                List<Disco> discos = discoGrupo.getDiscos();
                for (Disco disco : discos) {
//                    System.out.println("Tamanho do disco: " + Conversor.formatarBytes(disco.getTamanho()));
//                    System.out.println(Conversor.formatarBytes(disco.getBytesDeLeitura()));
//                    System.out.println(Conversor.formatarBytes(disco.getLeituras()));
//                    System.out.println(Conversor.formatarBytes(disco.getBytesDeEscritas()));
//                    System.out.println(Conversor.formatarBytes(disco.getEscritas()));
                    
                    
                    String dadoDiscoTotalString = Conversor02.formatarBytes(disco.getTamanho());
                    String dadoDiscoEcritaString = Conversor02.formatarBytes(disco.getBytesDeEscritas());
                    String dadoDiscoLeituraString = Conversor02.formatarBytes(disco.getBytesDeLeitura());
                    
                    Double dadoDiscoTotalDouble = Double.valueOf(dadoDiscoTotalString);
                    Double dadoDiscoEcritaDouble = Double.valueOf(dadoDiscoEcritaString);
                    Double dadoDiscoLeituraDouble = Double.valueOf(dadoDiscoLeituraString);
                    
                    Double totalUso = dadoDiscoEcritaDouble + dadoDiscoLeituraDouble;
                    Double totalDisco = (totalUso * 100) / dadoDiscoTotalDouble;
                    System.out.println(String.format("Inserindo dado do Disco: %.0f", totalDisco));
                    lblDadoDisco.setText(String.format("%.0f %s", totalDisco, "%"));
//                    String insertDisco = "INSERT INTO dado_disco VALUES (null, ?, current_timestamp, null, 1, 1);";
//                    banco.update(insertDisco, totalDisco);

                }
                lblProcessadorNome.setText(cpu.getNome());
                lblRamNome.setText(String.format("%.0f %s", dadoTotalRamlDouble, "GB"));
                lblSistemaNome.setText(sistema.getFabricante());
                lblTipoSistemaNome.setText(sistema.getSistemaOperacional());
            }
        }, 0, 2000);
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel13 = new javax.swing.JLabel();
        jPanel1 = new javax.swing.JPanel();
        jPanel2 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        lblDadoCpu = new javax.swing.JLabel();
        lblDadoDisco = new javax.swing.JLabel();
        lblDadoRam = new javax.swing.JLabel();
        jPanel3 = new javax.swing.JPanel();
        jLabel5 = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jLabel9 = new javax.swing.JLabel();
        lblProcessadorNome = new javax.swing.JLabel();
        lblSistemaNome = new javax.swing.JLabel();
        lblTipoSistemaNome = new javax.swing.JLabel();
        lblRamNome = new javax.swing.JLabel();

        jLabel13.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        jLabel13.setForeground(new java.awt.Color(0, 86, 143));
        jLabel13.setText("-");

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(255, 255, 255));

        jPanel2.setBackground(new java.awt.Color(0, 86, 143));
        jPanel2.setForeground(new java.awt.Color(0, 86, 143));

        jLabel1.setFont(new java.awt.Font("Verdana", 3, 14)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(0, 0, 0));
        jLabel1.setText("Monitoramento");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGap(183, 183, 183)
                .addComponent(jLabel1)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel1)
                .addContainerGap(11, Short.MAX_VALUE))
        );

        jLabel2.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(0, 0, 0));
        jLabel2.setText("CPU");

        jLabel3.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(0, 0, 0));
        jLabel3.setText("RAM");

        jLabel4.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(0, 0, 0));
        jLabel4.setText("DISCO");

        lblDadoCpu.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        lblDadoCpu.setForeground(new java.awt.Color(0, 102, 0));
        lblDadoCpu.setText("-");

        lblDadoDisco.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        lblDadoDisco.setForeground(new java.awt.Color(0, 102, 0));
        lblDadoDisco.setText("-");

        lblDadoRam.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        lblDadoRam.setForeground(new java.awt.Color(0, 102, 0));
        lblDadoRam.setText("-");

        jPanel3.setBackground(new java.awt.Color(0, 86, 143));

        jLabel5.setFont(new java.awt.Font("Verdana", 3, 14)); // NOI18N
        jLabel5.setForeground(new java.awt.Color(0, 0, 0));
        jLabel5.setText("Hardware");

        javax.swing.GroupLayout jPanel3Layout = new javax.swing.GroupLayout(jPanel3);
        jPanel3.setLayout(jPanel3Layout);
        jPanel3Layout.setHorizontalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel3Layout.createSequentialGroup()
                .addGap(208, 208, 208)
                .addComponent(jLabel5)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel3Layout.setVerticalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel3Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel5)
                .addContainerGap(11, Short.MAX_VALUE))
        );

        jLabel6.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        jLabel6.setForeground(new java.awt.Color(0, 0, 0));
        jLabel6.setText("Processador:");

        jLabel7.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        jLabel7.setForeground(new java.awt.Color(0, 0, 0));
        jLabel7.setText("Memória RAM:");

        jLabel8.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        jLabel8.setForeground(new java.awt.Color(0, 0, 0));
        jLabel8.setText("Sistema Operacional:");

        jLabel9.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        jLabel9.setForeground(new java.awt.Color(0, 0, 0));
        jLabel9.setText("Tipo de Sitema:");

        lblProcessadorNome.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        lblProcessadorNome.setForeground(new java.awt.Color(0, 86, 143));
        lblProcessadorNome.setText("-");

        lblSistemaNome.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        lblSistemaNome.setForeground(new java.awt.Color(0, 86, 143));
        lblSistemaNome.setText("-");

        lblTipoSistemaNome.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        lblTipoSistemaNome.setForeground(new java.awt.Color(0, 86, 143));
        lblTipoSistemaNome.setText("-");

        lblRamNome.setFont(new java.awt.Font("Verdana", 1, 12)); // NOI18N
        lblRamNome.setForeground(new java.awt.Color(0, 86, 143));
        lblRamNome.setText("-");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(85, 85, 85)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel2)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(6, 6, 6)
                        .addComponent(lblDadoCpu, javax.swing.GroupLayout.PREFERRED_SIZE, 28, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(6, 6, 6)
                        .addComponent(lblDadoRam, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addComponent(jLabel3))
                .addGap(114, 114, 114)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jLabel4)
                    .addComponent(lblDadoDisco, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(79, 79, 79))
            .addComponent(jPanel3, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(79, 79, 79)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jLabel9)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(lblTipoSistemaNome, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jLabel8)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(lblSistemaNome, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jLabel7)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(lblRamNome, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jLabel6)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(lblProcessadorNome, javax.swing.GroupLayout.PREFERRED_SIZE, 260, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(62, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(43, 43, 43)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(jLabel4)
                    .addComponent(jLabel3))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(lblDadoCpu)
                    .addComponent(lblDadoRam)
                    .addComponent(lblDadoDisco))
                .addGap(57, 57, 57)
                .addComponent(jPanel3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(33, 33, 33)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel6)
                    .addComponent(lblProcessadorNome))
                .addGap(12, 12, 12)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel7)
                    .addComponent(lblRamNome))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel8)
                    .addComponent(lblSistemaNome))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel9)
                    .addComponent(lblTipoSistemaNome))
                .addContainerGap(59, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Logado.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Logado.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Logado.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Logado.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            @Override
            public void run() {
                new Logado().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel13;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JLabel lblDadoCpu;
    private javax.swing.JLabel lblDadoDisco;
    private javax.swing.JLabel lblDadoRam;
    private javax.swing.JLabel lblProcessadorNome;
    private javax.swing.JLabel lblRamNome;
    private javax.swing.JLabel lblSistemaNome;
    private javax.swing.JLabel lblTipoSistemaNome;
    // End of variables declaration//GEN-END:variables
}