import React,{useState} from 'react';
import CarousselHome from './CarousselHome';

function Home() {

    const [page,setpage] = useState(1)


    
    
    const Calendar = [
        {date:1, heure:'16H30', equipe1:'Seoul Dynasty', logo1:'https://bnetcmsus-a.akamaihd.net/cms/page_media/LHRSIW3NWH211508792362796.png', score1:'2', equipe2:'Houston Outlaw', logo2:'https://bnetcmsus-a.akamaihd.net/cms/gallery/2YF5VLIMGZVA1546557680222.png', score2:'1'},
        {date:1, heure:'16H30', equipe1:'Shangai Dragon', logo1:'https://bnetcmsus-a.akamaihd.net/cms/page_media/B0R64QSNCDLX1508792362793.png', score1:'0', equipe2:'Shengu Hunter', logo2:'https://bnetcmsus-a.akamaihd.net/cms/page_media/st/STKSER89UHKO1542674031469.png', score2:'1'},
        {date:1, heure:'20H30', equipe1:'Atlanta Reign', logo1:'https://bnetcmsus-a.akamaihd.net/cms/page_media/32/32MTX0PLEDY31542673991836.png', score1:'2', equipe2:'Philadelphia Fusion', logo2:'https://bnetcmsus-a.akamaihd.net/cms/page_media/3JZTLCPH37QD1508792362853.png', score2:'0'}
    ]
    const ListMatch = Calendar.map((journey)=>(
        <div data-aos="fade-up" className='row_calendar'>
            <div className='team_one_name'>{journey.equipe1}</div>
            <img className='logo'src={journey.logo1} width='40' height='40'></img>
            <div className='score_team_one'>{journey.score1}</div>
            <div> - </div>
            <div className='score_team_two'>{journey.score2}</div>
            <img className='logo' src={journey.logo2} width='40' height='40'></img>
            <div className='team_two_name'>{journey.equipe2}</div>
        </div>
    ))

    const Team = [
        {rank:1,logo:'https://bnetcmsus-a.akamaihd.net/cms/page_media/LHRSIW3NWH211508792362796.png',name:'Seoul Dynasty',victory:3,defeat: 0, playedMatch:3,point:9 },
        {rank:2,logo:'https://bnetcmsus-a.akamaihd.net/cms/page_media/B0R64QSNCDLX1508792362793.png',name:'Shangai Dragon',victory:2,defeat: 1, playedMatch:3,point:6 },
        {rank:3,logo:'https://bnetcmsus-a.akamaihd.net/cms/page_media/32/32MTX0PLEDY31542673991836.png',name:'Atlanta Reign',victory:2,defeat: 1, playedMatch:3,point:6 },
        {rank:4,logo:'https://bnetcmsus-a.akamaihd.net/cms/gallery/2YF5VLIMGZVA1546557680222.png',name:'Houston Outlaw',victory:1,defeat: 2, playedMatch:3,point:3 },
        {rank:5,logo:'https://bnetcmsus-a.akamaihd.net/cms/page_media/st/STKSER89UHKO1542674031469.png',name:'Shengu Hunter',victory:1,defeat: 2, playedMatch:3,point:3 },
        {rank:6,logo:'https://bnetcmsus-a.akamaihd.net/cms/page_media/3JZTLCPH37QD1508792362853.png',name:'Philadelphia Fusion',victory:0 ,defeat: 3, playedMatch:3,point:0 }
    ]

     const Classement = Team.map((team)=>(
        <div data-aos="fade-up" className='row_classement'>
            <div className='team_rank'>{team.rank}</div>
            <img className='team_logo'src={team.logo} width='40' height='40'></img>
            <div className='team_name'>{team.name}</div>
            <div className='team_victory'>{team.victory}</div>
            <div className='team_defeat'>{team.defeat}</div>
            <div className='team_playedMatch'>{team.playedMatch}</div>
            <div className='team_point'>{team.point}</div>
        </div>
     ))


    const number = 2
    const date =  number+1 +'eme journée'
    
    const TeamFemDepJoueuses = [
        {number:'1',nom:'MAUREL',prenom:'Fanny',poste:'Récep/Attaque'},
        {number:'2',nom:'PICHODO',prenom:'Wanda',poste:'Centrale'},
        {number:'3',nom:'CHERKI',prenom:'Yasmina',poste:'Récep/Attaque'},
        {number:'4',nom:'PONCHON',prenom:'Elsa',poste:'Centrale'},
        {number:'5',nom:'NOVAK',prenom:'Roxane',poste:'Récep/Attaque'},
        {number:'7',nom:'BASSET',prenom:'Nolwenn',poste:'Passeuse'},
        {number:'9',nom:'ALCANTRA',prenom:'Marina',poste:'Centrale'},
        {number:'10',nom:'CICCELI',prenom:'Pauline',poste:'Centrale'},
        {number:'11',nom:'TOULOUSE',prenom:'Marine',poste:'Récep/Attaque'},
        {number:'12',nom:'LABE',prenom:'Anna',poste:'Passeuse'},
        {number:'13',nom:'CLAVEAU',prenom:'Maia',poste:'Libéro'},
        {number:'14',nom:'MOULIN',prenom:'Coline',poste:'Récep/Attaque'},
        {number:'16',nom:'COSICKI',prenom:'Marion',poste:'Passeuse'},
        {number:'',nom:'BAFOUNTA',prenom:'Raphael',poste:'Entraîneur'},
        {number:'',nom:'BAILLIF',prenom:'Sofiane',poste:'Entraîneur Adj'}
    ]

    const TeamFemDep = TeamFemDepJoueuses.map((team)=>(
        <div className='row_classement_player'>
            <div className='team_player_number'>{team.number}</div>
            <div className='team_player_nom'>{team.nom}</div>
            <div className='team_player_prenom'>{team.prenom}</div>
            <div className='team_player_poste'>{team.poste}</div>
        </div>
     ))

     const TeamHommeDepJoueurs = [
        {number:'1',nom:'TISSANDIE',prenom:'Simon',poste:'Récep/Attaque'},
        {number:'2',nom:'DELEBASSE',prenom:'Nathan',poste:'Centrale'},
        {number:'3',nom:'WICES',prenom:'Matteo',poste:'Récep/Attaque'},
        {number:'4',nom:'RIPOLES',prenom:'Lucas',poste:'Centrale'},
        {number:'5',nom:'ANDEME',prenom:'Paul',poste:'Récep/Attaque'},
        {number:'6',nom:'LADAVIERE',prenom:'Lilian',poste:'Passeuse'},
        {number:'7',nom:'PIRET',prenom:'Antoine',poste:'Centrale'},
        {number:'8',nom:'MATILE',prenom:'Vincent',poste:'Centrale'},
        {number:'9',nom:'GAMOUH',prenom:'Mehdi',poste:'Récep/Attaque'},
        {number:'10',nom:'BEKKIS',prenom:'Sam',poste:'Passeuse'},
        {number:'11',nom:'MEYER',prenom:'Benjamin',poste:'Entrainer/Joueur'},
        {number:'12',nom:'MENDES',prenom:'Bruno',poste:'Récep/Attaque'},
        {number:'',nom:'DIRISCIO',prenom:'Fabien',poste:'Entraineur'}
    ]

    const TeamHommeDep = TeamHommeDepJoueurs.map((team)=>(
        <div className='row_classement_player'>
            <div className='team_player_number'>{team.number}</div>
            <div className='team_player_nom'>{team.nom}</div>
            <div className='team_player_prenom'>{team.prenom}</div>
            <div className='team_player_poste'>{team.poste}</div>
        </div>
     ))



    if(page === 1){
    return (
        <div>
        {/* Banner Zone */}
                <div className='banner_bg_home'>
                    <div className='navbar'>
                        <ul id="menuElem" className='menu-zone'>
                                        <li onClick={()=>setpage(1)}>Accueil</li>
                                        <li onClick={()=>setpage(2)}>Le Club</li>
                                        <li onClick={()=>setpage(3)}>Résultats et actualité</li>
                                        
                                        <li class="dropdown" onClick={()=>setpage(4)}>Equipes
                                            <div class="dropdown-content">
                                            <div class="header">
                                                <ul>
                                                    <li>Coupe d'accession Régionale</li>
                                                    <li>Championnat de week end</li>
                                                    <li>Championnat Elite Régional</li>
                                                    <li>Championnat Départemental</li>
                                                    <li>Coupe de France</li>
                                                    <li>Coupe Régionale Jeunes</li>
                                                    <li>Equipes FFVB</li>
                                                    <li>Equipes FSGT</li>
                                                    
                                                </ul>
                                            </div>
                                            
                                            </div>
                                        </li>

                                        <li onClick={()=>setpage(5)}>Loisirs</li>
                                        <li onClick={()=>setpage(6)}>Partenariats</li>
                                        <li onClick={()=>setpage(7)}>Contactes et gymnases</li>
                                        <li onClick={()=>setpage(8)}>Téléchargements</li>
                        </ul>
                    </div>  
                </div>

                <div className='banner_main'></div>
                <div className='annonces_home'>Annonces</div>
                <div className='important_anounce_covid'>
                    <p><strong>Situation Covid 19 :</strong></p> 
                    <p>toutes les activités du club sont suspendues jusqu'à nouvel ordre. Ceci s'applique aux entrainements et compétitions toutes catégories et toutes sections confondues.</p>
                    <p> Merci de votre compréhension.</p>
                </div>


                <CarousselHome/>

                <div className='annonces_home'>Les mots du président</div>
                <div className='important_anounce_president'>
                    <p><strong>Bienvenue sur le site de VB@ll,</strong></p> 
                    <p>Le premier Club de la Ligue Auvergne Rhône-Alpes en nombre d'adhérents !</p>
                    <p>Les bénévoles et les 430 adhérents du Volley Bron Lyon Lumière vous souhaitent la bienvenue sur le nouveau site de Vb@ll !</p>
                    <p>Venez découvrir et suivre, au fil de la saison, la vie sportive et festive des plus de 40 équipes du club !
                       De (moins de) 6 à (plus de) 66 ans, homme ou femme, pratiquant loisir ou compétiteur, en semaine ou le week-end, sous licence FFVB et/ou FSGT, il y a forcément une place pour vous à VB@ll… si vous vous intéressez au volley !</p>
                    <p>Parents, futurs joueurs ou bénévoles, n’hésitez pas à nous contacter pour plus de renseignements</p>
                </div>
                
            

            
            

        </div>
    )}

    if(page === 2){
        return (
            <div>
            {/* Banner Zone */}
                <div className='banner_bg_home'>
                    <div className='navbar'>
                        <ul className='menu-zone'>
                                        <li onClick={()=>setpage(1)}>Accueil</li>
                                        <li onClick={()=>setpage(2)}>Le Club</li>
                                        <li onClick={()=>setpage(3)}>Résultats et actualité</li>
                                        <li class="dropdown" onClick={()=>setpage(4)}>Equipes
                                            <div class="dropdown-content">
                                            <div class="header">
                                                <ul>
                                                    <li>Coupe d'accession Régionale</li>
                                                    <li>Championnat de week end</li>
                                                    <li>Championnat Elite Régional</li>
                                                    <li>Championnat Départemental</li>
                                                    <li>Coupe de France</li>
                                                    <li>Coupe Régionale Jeunes</li>
                                                    <li>Equipes FFVB</li>
                                                    <li>Equipes FSGT</li>
                                                    
                                                </ul>
                                            </div>
                                            
                                            </div>
                                        </li>
                                        <li onClick={()=>setpage(5)}>Loisirs</li>
                                        <li onClick={()=>setpage(6)}>Partenariats</li>
                                        <li onClick={()=>setpage(7)}>Contactes et gymnases</li>
                                        <li onClick={()=>setpage(8)}>Téléchargements</li>
                        </ul>
                    </div>  
                </div>
                <div className='banner_main'></div>
                <div>PAGE CLUB</div>
    
                
    
            </div>
        )}
    
        if(page === 3){
            return (
                <div>
                {/* Banner Zone */}
                    <div className='banner_bg_home'>
                        <div className='navbar'>
                            <ul className='menu-zone'>
                                        <li onClick={()=>setpage(1)}>Accueil</li>
                                        <li onClick={()=>setpage(2)}>Le Club</li>
                                        <li onClick={()=>setpage(3)}>Résultats et actualité</li>
                                        <li class="dropdown" onClick={()=>setpage(4)}>Equipes
                                            <div class="dropdown-content">
                                            <div class="header">
                                                <ul>
                                                    <li>Coupe d'accession Régionale</li>
                                                    <li>Championnat de week end</li>
                                                    <li>Championnat Elite Régional</li>
                                                    <li>Championnat Départemental</li>
                                                    <li>Coupe de France</li>
                                                    <li>Coupe Régionale Jeunes</li>
                                                    <li>Equipes FFVB</li>
                                                    <li>Equipes FSGT</li>
                                                    
                                                </ul>
                                            </div>
                                            
                                            </div>
                                        </li>
                                        <li onClick={()=>setpage(5)}>Loisirs</li>
                                        <li onClick={()=>setpage(6)}>Partenariats</li>
                                        <li onClick={()=>setpage(7)}>Contactes et gymnases</li>
                                        <li onClick={()=>setpage(8)}>Téléchargements</li>
                            </ul>
                        </div>
                        
                        
                    </div>
        
                    
        
                {/* Match Result Zone */}
                    <div className='four_card_home'>
                        <div className='result_header'>Résultat de la {date} </div>
                        {ListMatch}
                        {/* <div className='width-edit'><div className='btn-test'>Editer</div></div> */}
                    </div>
        
                {/* Classement Zone */}
                    <div className='new_products_home'>
                        <div className='result_header'>
                        <div className='team_rank'>R</div>
                        <div className='team_logo_empty'></div>
                        <div className='team_name'>Team Name</div>
                        <div className='team_victory'>V</div>
                        <div className='team_defeat'>D</div>
                        <div className='team_playedMatch'>J</div>
                        <div className='team_point'>Points</div>
                    </div>
                    {Classement}
                    
                   
                   



                    
                       
                        
                        {/* <div className='width-edit'><div className='btn-test'>Editer</div></div> */}
                    </div>
                    
        
                </div>
            )}
            
            if(page === 4){
                return (
                    <div>
                    {/* Banner Zone */}
                        <div className='banner_bg_home'>
                            <div className='navbar'>
                                <ul className='menu-zone'>
                                        <li onClick={()=>setpage(1)}>Accueil</li>
                                        <li onClick={()=>setpage(2)}>Le Club</li>
                                        <li onClick={()=>setpage(3)}>Résultats et actualité</li>
                                        <li class="dropdown" onClick={()=>setpage(4)}>Equipes
                                            <div class="dropdown-content">
                                            <div class="header">
                                                <ul>
                                                    <li>Coupe d'accession Régionale</li>
                                                    <li>Championnat de week end</li>
                                                    <li>Championnat Elite Régional</li>
                                                    <li>Championnat Départemental</li>
                                                    <li>Coupe de France</li>
                                                    <li>Coupe Régionale Jeunes</li>
                                                    <li>Equipes FFVB</li>
                                                    <li>Equipes FSGT</li>
                                                    
                                                </ul>
                                            </div>
                                            
                                            </div>
                                        </li>
                                        <li onClick={()=>setpage(5)}>Loisirs</li>
                                        <li onClick={()=>setpage(6)}>Partenariats</li>
                                        <li onClick={()=>setpage(7)}>Contactes et gymnases</li>
                                        <li onClick={()=>setpage(8)}>Téléchargements</li>
                                </ul>
                            </div>  
                        </div>
                        <div style={{marginTop:100}}></div>

                        <div data-aos="zoom-in-up" className='result_header'>Coupe d'accession régionnale Féminines</div>

                        <div data-aos="zoom-in-up" className='container-for-player'>
                            <div className='team_fem_reg_list'>{TeamFemDep}</div>
                            <div className='team_pic_fem_reg'></div>
                        </div>

                        <div data-aos="zoom-in-up" className='container-for-center'>
                            <a target='_blank' className='btn-access-classement' href='https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2019/2020&codent=LIRA&division=CSF&tour=01'>
                                Résultats
                            </a>
                        </div>


                        <div data-aos="zoom-in-up" className='result_header'>Coupe d'accession régionnale Masculins</div>

                        <div data-aos="zoom-in-up" className='container-for-player'>
                            <div className='team_fem_reg_list'>{TeamHommeDep}</div>
                            <div className='team_pic_hom_reg'></div>
                        </div>

                        <div data-aos="zoom-in-up" className='container-for-center'>
                            <a target='_blank' className='btn-access-classement' href='https://www.ffvbbeach.org/ffvbapp/resu/vbspo_calendrier.php?saison=2019/2020&codent=LIRA&division=CSM&tour=01'>
                                Résultats
                            </a>
                        </div>
                        
            
                        
            
                    </div>
                )}

                if(page === 5){
                    return (
                        <div>
                        {/* Banner Zone */}
                            <div className='banner_bg_home'>
                                <div className='navbar'>
                                    <ul className='menu-zone'>
                                        <li onClick={()=>setpage(1)}>Accueil</li>
                                        <li onClick={()=>setpage(2)}>Le Club</li>
                                        <li onClick={()=>setpage(3)}>Résultats et actualité</li>
                                        <li class="dropdown" onClick={()=>setpage(4)}>Equipes
                                            <div class="dropdown-content">
                                            <div class="header">
                                                <ul>
                                                    <li>Coupe d'accession Régionale</li>
                                                    <li>Championnat de week end</li>
                                                    <li>Championnat Elite Régional</li>
                                                    <li>Championnat Départemental</li>
                                                    <li>Coupe de France</li>
                                                    <li>Coupe Régionale Jeunes</li>
                                                    <li>Equipes FFVB</li>
                                                    <li>Equipes FSGT</li>
                                                    
                                                </ul>
                                            </div>
                                            
                                            </div>
                                        </li>
                                        <li onClick={()=>setpage(5)}>Loisirs</li>
                                        <li onClick={()=>setpage(6)}>Partenariats</li>
                                        <li onClick={()=>setpage(7)}>Contactes et gymnases</li>
                                        <li onClick={()=>setpage(8)}>Téléchargements</li>
                                    </ul>
                                </div>  
                            </div>
                            <div className='blue_bg'>Section Loisirs</div>
                            <div className='loisirs_container'>
                                <p>Le groupe loisir sans compétition fonctionne les lundi et mercredi de 20 à 22 h au gymnase Dargent.Encadrée par un animateur diplômé, la section compte environ 70 personnes.</p>
                                <p>Régulièrement des stages de perfectionnement sont organisés.</p>
                            </div>
                            <div className='loisir_main_img' style={{height:500,width:'90%',marginLeft:'5%',border:'4px solid white'}}></div>
                            
                
                            
                
                        </div>
                    )}


                if(page === 6){
                    return (
                        <div>
                        {/* Banner Zone */}
                            <div className='banner_bg_home'>
                                <div className='navbar'>
                                    <ul className='menu-zone'>
                                        <li onClick={()=>setpage(1)}>Accueil</li>
                                        <li onClick={()=>setpage(2)}>Le Club</li>
                                        <li onClick={()=>setpage(3)}>Résultats et actualité</li>
                                        <li class="dropdown" onClick={()=>setpage(4)}>Equipes
                                            <div class="dropdown-content">
                                            <div class="header">
                                                <ul>
                                                    <li>Coupe d'accession Régionale</li>
                                                    <li>Championnat de week end</li>
                                                    <li>Championnat Elite Régional</li>
                                                    <li>Championnat Départemental</li>
                                                    <li>Coupe de France</li>
                                                    <li>Coupe Régionale Jeunes</li>
                                                    <li>Equipes FFVB</li>
                                                    <li>Equipes FSGT</li>
                                                    
                                                </ul>
                                            </div>
                                            
                                            </div>
                                        </li>
                                        <li onClick={()=>setpage(5)}>Loisirs</li>
                                        <li onClick={()=>setpage(6)}>Partenariats</li>
                                        <li onClick={()=>setpage(7)}>Contactes et gymnases</li>
                                        <li onClick={()=>setpage(8)}>Téléchargements</li>
                                    </ul>
                                </div>  
                            </div>
                            <div className='banner_partenaires'></div>

                            <div className='partner_card_zone'>
                                <div data-aos="flip-up" className='partner_card'>
                                    <div className='logo_1986'></div>
                                    <div className='text_card'>
                                        <div><strong>19CENT86 Immobilier & Placements</strong></div>
                                        <div>Spécialisé dans la transaction immobilière et le conseil en patrimoine.
                                            Il est composé d’une équipe d’experts autour de Nicolas MAÏA, Gérant.
                                        </div>
                                        <div>Sa valeur ajoutée ? Des collaborateurs passionnés et aguerris aux techniques de l'immobilier et du placement depuis de nombreuses années!</div>
                                        <div>Sa mission : vous accompagner dans la vente, la location et l'achat de votre bien immobilier mais également dans la constitution ou l'optimisation de votre patrimoine.</div>
                                        <div className='link_card'>
                                            <div>Site internet : http://</div>
                                            <div>Numéro de téléphone : 06 50 09 33 38</div>
                                            <div>Adresse : 31 C Rue Pierre Delore, 69008 Lyon</div>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="flip-up" className='partner_card'>
                                    <div className='logo_ninkasi'></div>
                                    <div className='text_card'>
                                        <div><strong>NINKASI Sans Souci</strong></div>
                                        <div>Spécialisé dans la transaction immobilière et le conseil en patrimoine.
                                            Il est composé d’une équipe d’experts autour de Nicolas MAÏA, Gérant.
                                        </div>
                                        <div>Sa valeur ajoutée ? Des collaborateurs passionnés et aguerris aux techniques de l'immobilier et du placement depuis de nombreuses années!</div>
                                        <div>Sa mission : vous accompagner dans la vente, la location et l'achat de votre bien immobilier mais également dans la constitution ou l'optimisation de votre patrimoine.</div>
                                        <div className='link_card'>
                                            <div>Site internet : http://</div>
                                            <div>Numéro de téléphone : 06 50 09 33 38</div>
                                            <div>Adresse : 31 C Rue Pierre Delore, 69008 Lyon</div>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="flip-up" className='partner_card'>
                                    <div className='logo_droguerie'></div>
                                    <div className='text_card'>
                                        <div><strong>Grande droguerie Lyonnaise</strong></div>
                                        <div>Spécialisé dans la transaction immobilière et le conseil en patrimoine.
                                            Il est composé d’une équipe d’experts autour de Nicolas MAÏA, Gérant.
                                        </div>
                                        <div>Sa valeur ajoutée ? Des collaborateurs passionnés et aguerris aux techniques de l'immobilier et du placement depuis de nombreuses années!</div>
                                        <div>Sa mission : vous accompagner dans la vente, la location et l'achat de votre bien immobilier mais également dans la constitution ou l'optimisation de votre patrimoine.</div>
                                        <div className='link_card'>
                                            <div>Site internet : http://</div>
                                            <div>Numéro de téléphone : 06 50 09 33 38</div>
                                            <div>Adresse : 31 C Rue Pierre Delore, 69008 Lyon</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            
                
                        </div>
                    )}

                    if(page === 7){
                        return (
                            <div>
                            {/* Banner Zone */}
                                <div className='banner_bg_home'>
                                    <div className='navbar'>
                                        <ul className='menu-zone'>
                                            <li onClick={()=>setpage(1)}>Accueil</li>
                                            <li onClick={()=>setpage(2)}>Le Club</li>
                                            <li onClick={()=>setpage(3)}>Résultats et actualité</li>
                                            <li class="dropdown" onClick={()=>setpage(4)}>Equipes
                                            <div class="dropdown-content">
                                            <div class="header">
                                                <ul>
                                                    <li>Coupe d'accession Régionale</li>
                                                    <li>Championnat de week end</li>
                                                    <li>Championnat Elite Régional</li>
                                                    <li>Championnat Départemental</li>
                                                    <li>Coupe de France</li>
                                                    <li>Coupe Régionale Jeunes</li>
                                                    <li>Equipes FFVB</li>
                                                    <li>Equipes FSGT</li>
                                                    
                                                </ul>
                                            </div>
                                            
                                            </div>
                                        </li>
                                            <li onClick={()=>setpage(5)}>Loisirs</li>
                                            <li onClick={()=>setpage(6)}>Partenariats</li>
                                            <li onClick={()=>setpage(7)}>Contactes et gymnases</li>
                                            <li onClick={()=>setpage(8)}>Téléchargements</li>
                                        </ul>
                                    </div>  
                                </div>
                                <div>PAGE contactes et infos</div>
                    
                                
                    
                            </div>
                        )}

                        if(page === 8){
                            return (
                                <div>
                                {/* Banner Zone */}
                                    <div className='banner_bg_home'>
                                        <div className='navbar'>
                                            <ul className='menu-zone'>
                                                <li onClick={()=>setpage(1)}>Accueil</li>
                                                <li onClick={()=>setpage(2)}>Le Club</li>
                                                <li onClick={()=>setpage(3)}>Résultats et actualité</li>
                                                <li class="dropdown" onClick={()=>setpage(4)}>Equipes
                                            <div class="dropdown-content">
                                            <div class="header">
                                                <ul>
                                                    <li>Coupe d'accession Régionale</li>
                                                    <li>Championnat de week end</li>
                                                    <li>Championnat Elite Régional</li>
                                                    <li>Championnat Départemental</li>
                                                    <li>Coupe de France</li>
                                                    <li>Coupe Régionale Jeunes</li>
                                                    <li>Equipes FFVB</li>
                                                    <li>Equipes FSGT</li>
                                                    
                                                </ul>
                                            </div>
                                            
                                            </div>
                                        </li>
                                                <li onClick={()=>setpage(5)}>Loisirs</li>
                                                <li onClick={()=>setpage(6)}>Partenariats</li>
                                                <li onClick={()=>setpage(7)}>Contactes et gymnases</li>
                                                <li onClick={()=>setpage(8)}>Téléchargements</li>
                                            </ul>
                                        </div>  
                                    </div>
                                    <div>PAGE TELECHARGEMENT</div>
                        
                                    
                        
                                </div>
                            )}
}

export default Home
