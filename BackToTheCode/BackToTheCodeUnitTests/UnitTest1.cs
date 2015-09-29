using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using BackToTheCode;

namespace BackToTheCodeUnitTests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestGrid()
        {
            Grid myGrid = new Grid();

            string testStr =   @"...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................
...................................";

            for (int i = 0; i < myGrid.rows; i++)
            {
                myGrid.Initialize("...................................", i);
            }

            Assert.AreEqual(testStr.Trim(), myGrid.ToString().Trim());
        }

        [TestMethod]
        public void DistanceBetweenTwoPoints()
        {
            Assert.AreEqual(1, Grid.GetDistance(0, 0, 0, 1));
            Assert.AreEqual(2, Grid.GetDistance(0, 0, 0, 2));
            Assert.AreEqual(53, Grid.GetDistance(0, 0, 34, 19));
        }

        [TestMethod]
        public void GetNearestNeutralePoint1()
        {
            Grid myGrid = new Grid();
            myGrid.myPositionX = 0;
            myGrid.myPositionY = 0;

            myGrid.Initialize("0..................................", 0);
            myGrid.Initialize("...................................", 1);
            myGrid.Initialize("...................................", 2);
            myGrid.Initialize("...................................", 3);
            myGrid.Initialize("...................................", 4);
            myGrid.Initialize("...................................", 5);
            myGrid.Initialize("...................................", 6);
            myGrid.Initialize("...................................", 7);
            myGrid.Initialize("...................................", 8);
            myGrid.Initialize("...................................", 9);
            myGrid.Initialize("...................................", 10);
            myGrid.Initialize("...................................", 11);
            myGrid.Initialize("...................................", 12);
            myGrid.Initialize("...................................", 13);
            myGrid.Initialize("...................................", 14);
            myGrid.Initialize("...................................", 15);
            myGrid.Initialize("...................................", 16);
            myGrid.Initialize("...................................", 17);
            myGrid.Initialize("...................................", 18);
            myGrid.Initialize("...................................", 19);

            Assert.AreEqual("1 0", myGrid.GetTheNearestNeutralPoint());

        }

        [TestMethod]
        public void GetNearestNeutralePoint2()
        {
            Grid myGrid = new Grid();
            myGrid.myPositionX = 0;
            myGrid.myPositionY = 0;

            myGrid.Initialize("00000000000000000000000000000000000", 0);
            myGrid.Initialize("00000000000000000000000000000000000", 1);
            myGrid.Initialize("00000000000000000000000000000000000", 2);
            myGrid.Initialize("00000000000000000000000000000000000", 3);
            myGrid.Initialize("00000000000000000000000000000000000", 4);
            myGrid.Initialize("00000000000000000000000000000000000", 5);
            myGrid.Initialize("00000000000000000000000000000000000", 6);
            myGrid.Initialize("00000000000000000000000000000000000", 7);
            myGrid.Initialize("00000000000000000000000000000000000", 8);
            myGrid.Initialize("00000000000000000000000000000000000", 9);
            myGrid.Initialize("00000000000000000000000000000000000", 10);
            myGrid.Initialize("00000000000000000000000000000000000", 11);
            myGrid.Initialize("00000000000000000000000000000000000", 12);
            myGrid.Initialize("00000000000000000000000000000000000", 13);
            myGrid.Initialize("00000000000000000000000000000000000", 14);
            myGrid.Initialize("00000000000000000000000000000000000", 15);
            myGrid.Initialize("00000000000000000000000000000000000", 16);
            myGrid.Initialize("00000000000000000000000000000000000", 17);
            myGrid.Initialize("00000000000000000000000000000000000", 18);
            myGrid.Initialize("0000000000000000000000000000000000.", 19);

            Assert.AreEqual("34 19", myGrid.GetTheNearestNeutralPoint());

        }
    }
}
