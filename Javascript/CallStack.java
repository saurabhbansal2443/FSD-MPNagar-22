
public class CallStack {
    public static void main(String[] args) {
        System.out.println("Main Started");
        First();
        System.out.println("Main End");
    }

    public static void First() {
        System.out.println("First Started
        Second();
        System.out.println("First End");
    }

    public static void Second() {
        System.out.println("Second Started");
        Third();
        System.out.println("Second End");
    }

    public static void Third() {
        System.out.println("Third Started");
        System.out.println("Third End");
    }
}