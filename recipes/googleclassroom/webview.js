module.exports = Dokomo => {
  const getMessages = () => {
    let homework = 0;
    const upcomingAssignment = document.querySelectorAll('.hrUpcomingAssignmentGroup');
    if (upcomingAssignment.length > 0) {
      let i;
      for (i = 0; i < upcomingAssignment.length; i++) {
        homework += upcomingAssignment[i].childElementCount;
      }
    }
    Dokomo.setBadge(homework);
  };

  Dokomo.loop(getMessages);
};
