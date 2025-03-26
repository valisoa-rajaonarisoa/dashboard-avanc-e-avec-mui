import { useState } from "react"; // Importer useState pour gérer l'état des événements
import FullCalendar from "@fullcalendar/react"; // Composant principal de FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // Plugin pour afficher le calendrier en vue mensuelle
import timeGridPlugin from "@fullcalendar/timegrid"; // Plugin pour afficher le calendrier en vue hebdomadaire/journalière
import interactionPlugin from "@fullcalendar/interaction"; // Plugin pour activer les interactions (clic, sélection, etc.)
import listPlugin from "@fullcalendar/list"; // Plugin pour afficher les événements sous forme de liste
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material"; // Importer les composants Material-UI pour la mise en page

import { tokens } from "../../theme"; // Importer les couleurs personnalisées du thème
import Headers from "../../components/Headers"; // Composant d'en-tête personnalisé
import { formatDate } from "@fullcalendar/core"; // Fonction pour formater les dates
import { EventApi } from "@fullcalendar/core"; // Type EventApi fourni par FullCalendar pour représenter les événements

const Calendar = () => {
  const theme = useTheme(); // Récupérer le thème actuel de Material-UI
  const colors = tokens(theme.palette.mode); // Récupérer les couleurs du thème basées sur le mode (clair/sombre)

  // État pour stocker les événements actuels dans le calendrier
  // Utiliser EventApi[] pour typer currentEvents car FullCalendar utilise ce type pour ses événements
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  // Gestion du clic sur une date vide dans le calendrier
  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event"); // Demander un titre pour le nouvel événement
    const calendarApi = selected.view.calendar; // Accéder à l'API du calendrier
    calendarApi.unselect(); // Désélectionner la date après le clic

    if (title) {
      // Ajouter un nouvel événement si un titre est fourni
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`, // ID unique basé sur la date et le titre
        title, // Titre de l'événement
        start: selected.startStr, // Date de début
        end: selected.endStr, // Date de fin (optionnelle)
        allDay: selected.allDay, // Indique si l'événement dure toute la journée
      });
    }
  };

  // Gestion du clic sur un événement existant dans le calendrier
  const handleEventClick = (selected: any) => {
    // Confirmer la suppression de l'événement avec une boîte de dialogue
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove(); // Supprimer l'événement si confirmé
    }
  };

  return (
    <Box m="20px"> {/* Conteneur principal avec une marge */}
      {/* En-tête de la page */}
      <Headers title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Grid container spacing={2}> {/* Grille Material-UI pour organiser le contenu */}
        {/* Colonne de gauche : Liste des événements */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: colors.primary[400], // Couleur de fond personnalisée
              p: "15px", // Padding interne
              borderRadius: "4px", // Coins arrondis
            }}
          >
            <Typography variant="h5">Events</Typography> {/* Titre de la liste */}
            <List>
              {/* Boucle sur les événements actuels pour afficher une liste */}
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id} // Clé unique pour chaque événement
                  sx={{
                    backgroundColor: colors.greenAccent[500], // Couleur de fond pour chaque élément
                    margin: "10px 0", // Marge entre les éléments
                    borderRadius: "2px", // Coins arrondis
                  }}
                >
                  {/* Affichage du titre de l'événement */}
                  <ListItemText
                    primary={event.title} // Titre principal
                    secondary={
                      <Typography>
                        {/* Formater la date de début de l'événement */}
                        {formatDate(event.start || new Date(), { // Ajouter une valeur par défaut pour éviter null
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Colonne de droite : Calendrier interactif */}
        <Grid item xs={12} md={8}>
          <Box ml="15px">
            <FullCalendar
              height="75vh" // Hauteur fixe pour le calendrier
              plugins={[
                dayGridPlugin, // Vue mensuelle
                timeGridPlugin, // Vue hebdomadaire/journalière
                interactionPlugin, // Interactions utilisateur (clic, sélection, etc.)
                listPlugin, // Vue en liste
              ]}
              headerToolbar={{
                left: "prev,next today", // Boutons de navigation
                center: "title", // Titre du calendrier
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth", // Vues disponibles
              }}
              initialView="dayGridMonth" // Vue initiale (calendrier mensuel)
              editable={true} // Permettre de modifier les événements
              selectable={true} // Permettre de sélectionner des dates
              selectMirror={true} // Afficher un aperçu lors de la sélection
              dayMaxEvents={true} // Limiter le nombre d'événements affichés par jour
              select={handleDateClick} // Gérer le clic sur une date vide
              eventClick={handleEventClick} // Gérer le clic sur un événement existant
              eventsSet={(events) => setCurrentEvents(events)} // Mettre à jour l'état des événements
              initialEvents={[
                {
                  id: "12315", // ID unique pour l'événement
                  title: "All-day event", // Titre de l'événement
                  date: "2022-09-14", // Date de l'événement
                },
                {
                  id: "5123", // ID unique pour l'événement
                  title: "Timed event", // Titre de l'événement
                  date: "2022-09-28", // Date de l'événement
                },
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calendar;