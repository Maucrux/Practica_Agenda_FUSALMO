import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    setActiveEvent({
      title: "Ingrese un Titulo",
      notes: "Escriba una pequeña descripción",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#ffff",
      user: {
        id: "6624",
        name: "Maury",
      },
    });

    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
