package com.mycompany.dyoung.project.cmd;

/**
 *
 * @author GJ541GR
 */
public class Totem {
    private Integer idTotem;
    private String loginTotem;
    private String senhaTotem;
    private Integer fk_posto;

    public Integer getIdTotem() {
        return idTotem;
    }

    public void setIdTotem(Integer idTotem) {
        this.idTotem = idTotem;
    }

    public String getLoginTotem() {
        return loginTotem;
    }

    public void setLoginTotem(String loginTotem) {
        this.loginTotem = loginTotem;
    }

    public String getSenhaTotem() {
        return senhaTotem;
    }

    public void setSenhaTotem(String senhaTotem) {
        this.senhaTotem = senhaTotem;
    }

    public Integer getFk_posto() {
        return fk_posto;
    }

    public void setFk_posto(Integer fk_posto) {
        this.fk_posto = fk_posto;
    }
}
